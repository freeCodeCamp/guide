import requests
from bs4 import BeautifulSoup
import csv

main_url = "https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/"
req = requests.get(main_url)
htmltext = BeautifulSoup(req.content, "lxml")

pagetxt = htmltext.find_all("div", {"id": "zg_paginationWrapper"})

listing = []
pageURL = []
for i in range(0, len(pagetxt)):
    listing.append(pagetxt[i].find("ol").find_all("li"))

for i in range(0, len(listing[0])):
    pageURL.append(listing[0][i].find("a")['href'])

bookURL = []
author = []
author_type1 = []
author_type2 = []
price = []
name = []
ratings = []
averageRating = []
for j in range(0, len(pageURL)):
    req = requests.get(pageURL[j])
    sourceCode = BeautifulSoup(req.content, "lxml")
    urltxt = sourceCode.find_all("div", {"class": "zg_itemWrapper"})
    for i in range(0, len(urltxt)):
        string = urltxt[i].find("div").find(
            "a", {"class": "a-link-normal"})['href']
        bookURL.append("https://www.amazon.com" + string
                       )
        author_type1.append(urltxt[i].find(
            "div", {"class": "a-row a-size-small"}).find("a"))
        author_type2.append(urltxt[i].find(
            "div", {"class": "a-row a-size-small"}).find("span"))
        price.append(urltxt[i].find(
            "span", {"class": "p13n-sc-price"}))
        temp = urltxt[i].find(
            "div", {"aria-hidden": "true"}).contents[0].rsplit()
        name.append(' '.join(temp))
        ratings.append(urltxt[i].find(
            "a", {"class": "a-size-small a-link-normal"}))
        averageRating.append(urltxt[i].find("i"))

'''print(author_type1)
print(author_type2)
print(price)

print(len(author_type1))
print(len(author_type2))
print(len(price))'''

data = [["Name", "URL", "Author", "Price",
         "Number of Ratings", "Average Rating"]]

index = 0
for i in range(100):
    # print(index)
    '''author.append(None)
    if(author_type1[index] is None):
        if(author_type2[index] is None):
            author[index]=("Not available")
        else:
            if author_type2[index] is not None:
                author[index]=(author_type2[index].find("span").contents[0])
    else:
        if author_type1[index] is not None:
            author[index]=(author_type1[index].find("a").contents[0])'''
    try:
        if(author_type1[index] is None):
            author.append(author_type2[index].contents[0])
        else:
            author.append(author_type1[index].contents[0])
    except:
        author.append("Not available")

    if(price[index] is None):
        price[index] = "Not available"
    else:
        price[index] = price[index].contents[0]

    if(averageRating[index] is None):
        averageRating[index] = "Not available"
    else:
        averageRating[index] = averageRating[index].find("span").contents[0]

    if(ratings[index] is None):
        ratings[index] = "Not available"
        averageRating[index] = "Not available"
    else:
        ratings[index] = ratings[index].contents[0]

    entry = [name[index], bookURL[index], author[index],
             price[index], ratings[index], averageRating[index]]
    index = index+1
    data.append(entry)

with open('./output/com_book.csv', 'w') as file:
    writer = csv.writer(file, delimiter=";")
    for row in data:
        writer.writerow(row)
