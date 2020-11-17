import json
import pandas as pd
import requests

states_geo = open("States_GEO.json", "r")
states_object = json.load(states_geo)
states_features = []
for i in range(52):
    states_features.append(states_object['features'][i])
states_geo.close()

#URL pulls state data just for the current or last weekday reported
url = "https://api.covidtracking.com/v1/states/current.json"
state_current_data = (requests.get(url)).json()
#Creating dataframe form api request
state_current_data=pd.DataFrame(state_current_data)

#Dropping US territoires from state current data
state_current_data = state_current_data.set_index("state")
state_current_data = state_current_data.drop(["AS","GU","MP","VI"])
state_current_data = state_current_data.reset_index()

state_current_data = state_current_data.drop(["date", "negative", "probableCases","pending", "totalTestResultsSource","totalTestResults", "hospitalizedCurrently", "hospitalizedCumulative","inIcuCurrently", "inIcuCumulative", "onVentilatorCurrently","onVentilatorCumulative", "recovered", "dataQualityGrade","lastUpdateEt", "dateModified", "checkTimeEt", "hospitalized", "dateChecked", "totalTestsViral", "positiveTestsViral","negativeTestsViral","positiveCasesViral", "deathConfirmed", "posNeg", "deathIncrease", "hospitalizedIncrease","hash", "commercialScore", "negativeRegularScore", "negativeScore", "positiveScore", "score", "grade", "deathProbable","totalTestEncountersViral", "totalTestsPeopleViral", "totalTestsAntibody","positiveTestsAntibody", "negativeTestsAntibody", "totalTestsPeopleAntibody", "negativeTestsPeopleAntibody","totalTestsPeopleAntigen", "positiveTestsPeopleAntigen", "positiveTestsAntigen", "fips", "positiveIncrease","negativeIncrease", "total", "totalTestResultsIncrease", "positiveTestsPeopleAntibody", "totalTestsAntigen"], axis=1)

states = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho","Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "South Dakota", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]

state_current_data['states'] = states

pr = state_current_data.loc[state_current_data['states'] == "Puerto Rico"]

state_current_data = state_current_data.drop([39])

state_current_data.sort_values(by=["states"], inplace = True)
state_current_data = state_current_data.append(pr)
state_current_data.reset_index(drop=True, inplace=True)

states_geo = open("States_GEO.json", "w")
states_geo.write('{\n"type": "FeatureCollection",\n"features": [\n')
for j in range(52):
    states_features[j]['properties']['Positive'] = int(state_current_data.iloc[j]["positive"])
    states_features[j]['properties']['Deaths'] = int(state_current_data.iloc[j]["death"])
    if j < 51:
        json.dump(states_features[j], states_geo)
        states_geo.write('\n,\n')
    elif j == 51:
        json.dump(states_features[j], states_geo)
        states_geo.write('\n]\n')
states_geo.write('}\n')
states_geo.close()