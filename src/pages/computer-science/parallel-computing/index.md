---
title: Parallel Computing
---
## Parallel Computing

Parallel computing is the type of computing architecture in which several processors execute or process an application or computation simultaneously. The motivation behind the parallel computation is reduce the workload and increase the computational power along with the performance. This kind of computing is again divided in four forms viz. bit-level, instruction-level, data, task-parallelism.

### Bit-level paralleism

Bit-level parallelism is a type of parallel computing where it focuses on increasing processor word size. Increasing the word size gradually reduces the number of instructions the processor must execute.(For example, consider a case where an 8-bit processor must add two 16-bit integers. The processor must first add the 8 lower-order bits from each integer, then add the 8 higher-order bits, requiring two instructions to complete a single operation. A 16-bit processor would be able to complete the operation with single instruction.)

### Instruction-level paralleism

Instruction-level paralleism is a type of paralleism where execution of multiple instructions from a program is carried out at the same time. Instruction-level paralleism further takes two ways:-
1. Hardware:- to discover and exploit parallelism dynamically
2. Software:- to restructure programs and facilitate parallelism.

### Data parallelism

Data parallelism is a type of parallelization across multiple processors in parallel computing environments. Its primary objective is to distribute data across different nodes, which operate on the data in parallel. In a multiprocessor system executing a single set of instructions (SIMD), data parallelism is achieved when each processor performs the same task on different pieces of distributed data.

### Task parallelism

 Task parallelism is a type of parallelism where parallelization is driven by programmer-specific tasks. Its primary objective is on distributing tasks—concurrently performed by processes or threads—across different processors. A common type of task parallelism is pipelining which consists of moving a single set of data through a series of separate tasks where each task can execute independently of the others.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
