import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression 
from sklearn.model_selection import train_test_split
import time 
import datetime


df = pd.read_excel('newdata.xlsx')

class Predict:
    def __init__(self,crop,month):
        self.crop = crop
        self.month = month
    
    def prediction(self):
        
        crop = self.crop
        month = self.month
        HouseDF = df[df['Crops']==crop]
        dates = HouseDF['Date'].tolist()
        a = [] 
        i=0
        for date in dates:
            string = date.to_pydatetime()
            string = string.strftime('%d/%m/%Y')
            a.append(time.mktime(datetime.datetime.strptime(string,"%d/%m/%Y").timetuple()))
            i=i+1
        
        X = np.array([a]).transpose()
        y = HouseDF[['WPI']]
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=0)
        lm = LinearRegression()
        lm.fit(X_train,y_train)
        text = time.mktime(datetime.datetime.strptime(month,"%d/%m/%Y").timetuple())
        arr = np.array([[text]])
        predictions = lm.predict(arr) 
        return round(predictions[0][0],2)

        
crop1 = Predict("Paddy","01/07/2020")
price = crop1.prediction()
print(price)












        
        

