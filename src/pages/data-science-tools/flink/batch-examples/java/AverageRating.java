import java.util.List;

import org.apache.flink.api.common.functions.GroupReduceFunction;
import org.apache.flink.api.common.functions.JoinFunction;
import org.apache.flink.api.java.DataSet;
import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.api.java.tuple.Tuple2;
import org.apache.flink.api.java.tuple.Tuple3;
import org.apache.flink.types.DoubleValue;
import org.apache.flink.types.StringValue;
import org.apache.flink.util.Collector;

public class AverageRating {

    public static void main(String[] args) throws Exception {
        ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();
        DataSet<Tuple3<Long, String, String>> movies = env.readCsvFile("ml-latest-small/movies.csv")
                .ignoreFirstLine()
                .parseQuotedStrings('"')
                .ignoreInvalidLines()
                .types(Long.class, String.class, String.class);

        DataSet<Tuple2<Long, Double>> ratings = env.readCsvFile("ml-latest-small/ratings.csv")
                .ignoreFirstLine()
                .includeFields(false, true, true, false)
                .types(Long.class, Double.class);

        List<Tuple2<String, Double>> distribution = movies.join(ratings)
        	.where(0)
        	.equalTo(0)
        	.with(new JoinFunction<Tuple3<Long, String, String>,Tuple2<Long, Double>, Tuple3<StringValue, StringValue, DoubleValue>>() {
        		private StringValue name = new StringValue();
        		private StringValue genre = new StringValue();
        		private DoubleValue score = new DoubleValue();
        		private Tuple3<StringValue, StringValue, DoubleValue> result = new Tuple3<>(name,genre,score);
        		
        		@Override
        		public Tuple3<StringValue, StringValue, DoubleValue> join(Tuple3<Long, String, String> movie,Tuple2<Long, Double> rating) throws Exception {
        			name.setValue(movie.f1);
        			genre.setValue(movie.f2.split("\\|")[0]);
        			score.setValue(rating.f1);
        			return result;
        		}
			})
        	.groupBy(1)
        	.reduceGroup(new GroupReduceFunction<Tuple3<StringValue,StringValue,DoubleValue>, Tuple2<String, Double>>() {
        		@Override
        		public void reduce(Iterable<Tuple3<StringValue,StringValue,DoubleValue>> iterable, Collector<Tuple2<String, Double>> collector) throws Exception {
        			StringValue genre = null;
        			int count = 0;
        			double totalScore = 0;
        			for(Tuple3<StringValue,StringValue,DoubleValue> movie: iterable){
        				genre = movie.f1;
        				totalScore += movie.f2.getValue();
        				count++;
        			}
        			
        			collector.collect(new Tuple2<>(genre.getValue(), totalScore/count));
        		}
			})
        	.collect();
        
        System.out.println(distribution);
    }
}
