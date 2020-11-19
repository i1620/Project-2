import json
import datetime as datetime
import pandas as pd
a_file = open("data_sources/daily_state.json", "r")
json_object = json.load(a_file)
a_file.close()
# print(json_object)

json_object['date'] = pd.to_datetime(json_object['date'], format='%Y%m%d')
# print(json_object)
a_file = open("sample_file.json", "w")
json.dump(json_object, a_file)
a_file.close()
# SAMPLE_FILE.JSON
