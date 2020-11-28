from flask import Flask, jsonify
import json


app = Flask(__name__)



states_geo = open("data_sources\current_states.json", "r")
states_object = json.load(states_geo)
states_object

@app.route('/')
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/state/Alabama<br/>"
        f"/api/state/Alaska<br/>"
        f"/api/state/Arizona<br/>"
        f"/api/state/Arkansas<br/>"
        f"/api/state/California<br/>"
        f"/api/state/Colorado<br/>"
        f"/api/state/Connecticut<br/>"
        f"/api/state/Delaware<br/>"
        f"/api/state/Florida<br/>"
        f"/api/state/Georgia<br/>"
        f"/api/state/Hawaii<br/>"
        f"/api/state/Idaho<br/>"
        f"/api/state/Illinois<br/>"
        f"/api/state/Indiana<br/>"
        f"/api/state/Iowa<br/>"
        f"/api/state/Kansas<br/>"
        f"/api/state/Kentucky<br/>"
        f"/api/state/Louisiana<br/>"
        f"/api/state/Maine<br/>"
        f"/api/state/Maryland<br/>"
        f"/api/state/Massachusetts<br/>"
        f"/api/state/Michigain<br/>"
        f"/api/state/Minnesota<br/>"
        f"/api/state/Mississippi<br/>"
        f"/api/state/Missouri<br/>"
        f"/api/state/Montana<br/>"
        f"/api/state/Nebraska<br/>"
        f"/api/state/Nevada<br/>"
        f"/api/state/New Hampshire<br/>"
        f"/api/state/New Jersey<br/>"
        f"/api/state/New Mexico<br/>"
        f"/api/state/New York<br/>"
        f"/api/state/North Carolina<br/>"
        f"/api/state/North Dakota<br/>"
        f"/api/state/Ohio<br/>"
        f"/api/state/Oklahoma<br/>"
        f"/api/state/Oregon<br/>"
        f"/api/state/Pennsylvania<br/>"
        f"/api/state/Rhode Island<br/>"
        f"/api/state/South Carolina<br/>"
        f"/api/state/South Dakota<br/>"
        f"/api/state/Tennessee<br/>"
        f"/api/state/Texas<br/>"
        f"/api/state/Utah<br/>"
        f"/api/state/Vermont<br/>"
        f"/api/state/Virginia<br/>"
        f"/api/state/Washington<br/>"
        f"/api/state/West Virginia<br/>"
        f"/api/state/Wisconsin<br/>"
        f"/api/state/Wyoming<br/>"
    )

@app.route('/api/state/Alabama')   
def alabama():
    state_dict = {}
    state_dict["State"] = states_object[1]["state"]
    state_dict["positive cases"] = states_object[1]["positive"]
    state_dict["Negative cases"] = states_object[1]["negative"]
    state_dict["Total Tests"] = states_object[1]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[1]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[1]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[1]["death"]

    return jsonify(state_dict)

@app.route('/api/state/Alaska')   
def alaska():
    state_dict = {}
    state_dict["State"] = states_object[0]["state"]
    state_dict["positive cases"] = states_object[0]["positive"]
    state_dict["Negative cases"] = states_object[0]["negative"]
    state_dict["Total Tests"] = states_object[0]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[0]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[0]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[0]["death"]

    return jsonify(state_dict)

@app.route('/api/state/Arizona')   
def arizona():
    state_dict = {}
    state_dict["State"] = states_object[4]["state"]
    state_dict["positive cases"] = states_object[4]["positive"]
    state_dict["Negative cases"] = states_object[4]["negative"]
    state_dict["Total Tests"] = states_object[4]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[4]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[4]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[4]["death"]

    return jsonify(state_dict) 

@app.route('/api/state/Arkansas')   
def arkansas():
    state_dict = {}
    state_dict["State"] = states_object[2]["state"]
    state_dict["positive cases"] = states_object[2]["positive"]
    state_dict["Negative cases"] = states_object[2]["negative"]
    state_dict["Total Tests"] = states_object[2]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[2]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[2]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[2]["death"]

    return jsonify(state_dict) 

@app.route('/api/state/California')   
def california():
    state_dict = {}
    state_dict["State"] = states_object[5]["state"]
    state_dict["positive cases"] = states_object[5]["positive"]
    state_dict["Negative cases"] = states_object[5]["negative"]
    state_dict["Total Tests"] = states_object[5]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[5]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[5]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[5]["death"]

    return jsonify(state_dict) 


@app.route('/api/state/Colorado')   
def colorado():
    state_dict = {}
    state_dict["State"] = states_object[6]["state"]
    state_dict["positive cases"] = states_object[6]["positive"]
    state_dict["Negative cases"] = states_object[6]["negative"]
    state_dict["Total Tests"] = states_object[6]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[6]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[6]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[6]["death"]

    return jsonify(state_dict) 

@app.route('/api/state/Connecticut')   
def connecticut():
    state_dict = {}
    state_dict["State"] = states_object[7]["state"]
    state_dict["positive cases"] = states_object[7]["positive"]
    state_dict["Negative cases"] = states_object[7]["negative"]
    state_dict["Total Tests"] = states_object[7]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[7]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[7]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[7]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Delaware')   
def delaware():
    state_dict = {}
    state_dict["State"] = states_object[9]["state"]
    state_dict["positive cases"] = states_object[9]["positive"]
    state_dict["Negative cases"] = states_object[9]["negative"]
    state_dict["Total Tests"] = states_object[9]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[9]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[9]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[9]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Florida')   
def florida():
    state_dict = {}
    state_dict["State"] = states_object[10]["state"]
    state_dict["positive cases"] = states_object[10]["positive"]
    state_dict["Negative cases"] = states_object[10]["negative"]
    state_dict["Total Tests"] = states_object[10]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[10]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[10]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[10]["death"]

    return jsonify(state_dict)  
     

@app.route('/api/state/Georgia')   
def georgia():
    state_dict = {}
    state_dict["State"] = states_object[11]["state"]
    state_dict["positive cases"] = states_object[11]["positive"]
    state_dict["Negative cases"] = states_object[11]["negative"]
    state_dict["Total Tests"] = states_object[11]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[11]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[11]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[11]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Hawaii')   
def hawaii():
    state_dict = {}
    state_dict["State"] = states_object[13]["state"]
    state_dict["positive cases"] = states_object[13]["positive"]
    state_dict["Negative cases"] = states_object[13]["negative"]
    state_dict["Total Tests"] = states_object[13]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[13]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[13]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[13]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Idaho')   
def idaho():
    state_dict = {}
    state_dict["State"] = states_object[15]["state"]
    state_dict["positive cases"] = states_object[15]["positive"]
    state_dict["Negative cases"] = states_object[15]["negative"]
    state_dict["Total Tests"] = states_object[15]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[15]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[15]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[15]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Illinois')   
def illinois():
    state_dict = {}
    state_dict["State"] = states_object[16]["state"]
    state_dict["positive cases"] = states_object[16]["positive"]
    state_dict["Negative cases"] = states_object[16]["negative"]
    state_dict["Total Tests"] = states_object[16]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[16]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[16]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[16]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Indiana')   
def indiana():
    state_dict = {}
    state_dict["State"] = states_object[17]["state"]
    state_dict["positive cases"] = states_object[17]["positive"]
    state_dict["Negative cases"] = states_object[17]["negative"]
    state_dict["Total Tests"] = states_object[17]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[17]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[17]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[17]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Iowa')   
def iowa():
    state_dict = {}
    state_dict["State"] = states_object[14]["state"]
    state_dict["positive cases"] = states_object[14]["positive"]
    state_dict["Negative cases"] = states_object[14]["negative"]
    state_dict["Total Tests"] = states_object[14]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[14]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[14]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[14]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Kansas')   
def kansas():
    state_dict = {}
    state_dict["State"] = states_object[18]["state"]
    state_dict["positive cases"] = states_object[18]["positive"]
    state_dict["Negative cases"] = states_object[18]["negative"]
    state_dict["Total Tests"] = states_object[18]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[18]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[18]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[18]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Kentucky')   
def kentucky():
    state_dict = {}
    state_dict["State"] = states_object[19]["state"]
    state_dict["positive cases"] = states_object[19]["positive"]
    state_dict["Negative cases"] = states_object[19]["negative"]
    state_dict["Total Tests"] = states_object[19]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[19]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[19]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[19]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Louisiana')   
def louisiana():
    state_dict = {}
    state_dict["State"] = states_object[20]["state"]
    state_dict["positive cases"] = states_object[20]["positive"]
    state_dict["Negative cases"] = states_object[20]["negative"]
    state_dict["Total Tests"] = states_object[20]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[20]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[20]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[20]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Maine')   
def maine():
    state_dict = {}
    state_dict["State"] = states_object[23]["state"]
    state_dict["positive cases"] = states_object[23]["positive"]
    state_dict["Negative cases"] = states_object[23]["negative"]
    state_dict["Total Tests"] = states_object[23]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[23]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[23]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[23]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Maryland')   
def maryland():
    state_dict = {}
    state_dict["State"] = states_object[22]["state"]
    state_dict["positive cases"] = states_object[22]["positive"]
    state_dict["Negative cases"] = states_object[22]["negative"]
    state_dict["Total Tests"] = states_object[22]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[22]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[22]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[22]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Massachusetts')   
def massachusetts():
    state_dict = {}
    state_dict["State"] = states_object[21]["state"]
    state_dict["positive cases"] = states_object[21]["positive"]
    state_dict["Negative cases"] = states_object[21]["negative"]
    state_dict["Total Tests"] = states_object[21]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[21]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[21]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[21]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Michigain')   
def michigain():
    state_dict = {}
    state_dict["State"] = states_object[24]["state"]
    state_dict["positive cases"] = states_object[24]["positive"]
    state_dict["Negative cases"] = states_object[24]["negative"]
    state_dict["Total Tests"] = states_object[24]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[24]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[24]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[24]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Minnesota')   
def minnesota():
    state_dict = {}
    state_dict["State"] = states_object[25]["state"]
    state_dict["positive cases"] = states_object[25]["positive"]
    state_dict["Negative cases"] = states_object[25]["negative"]
    state_dict["Total Tests"] = states_object[25]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[25]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[25]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[25]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Mississippi')   
def mississippi():
    state_dict = {}
    state_dict["State"] = states_object[28]["state"]
    state_dict["positive cases"] = states_object[28]["positive"]
    state_dict["Negative cases"] = states_object[28]["negative"]
    state_dict["Total Tests"] = states_object[28]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[28]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[28]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[28]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Missouri')   
def missouri():
    state_dict = {}
    state_dict["State"] = states_object[26]["state"]
    state_dict["positive cases"] = states_object[26]["positive"]
    state_dict["Negative cases"] = states_object[26]["negative"]
    state_dict["Total Tests"] = states_object[26]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[26]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[26]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[26]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Montana')   
def montana():
    state_dict = {}
    state_dict["State"] = states_object[29]["state"]
    state_dict["positive cases"] = states_object[29]["positive"]
    state_dict["Negative cases"] = states_object[29]["negative"]
    state_dict["Total Tests"] = states_object[29]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[29]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[29]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[29]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Nebraska')   
def nebraska():
    state_dict = {}
    state_dict["State"] = states_object[32]["state"]
    state_dict["positive cases"] = states_object[32]["positive"]
    state_dict["Negative cases"] = states_object[32]["negative"]
    state_dict["Total Tests"] = states_object[32]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[32]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[32]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[32]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Nevada')   
def nevada():
    state_dict = {}
    state_dict["State"] = states_object[36]["state"]
    state_dict["positive cases"] = states_object[36]["positive"]
    state_dict["Negative cases"] = states_object[36]["negative"]
    state_dict["Total Tests"] = states_object[36]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[36]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[36]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[36]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/New Hampshire')   
def new_hampshire():
    state_dict = {}
    state_dict["State"] = states_object[33]["state"]
    state_dict["positive cases"] = states_object[33]["positive"]
    state_dict["Negative cases"] = states_object[33]["negative"]
    state_dict["Total Tests"] = states_object[33]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[33]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[33]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[33]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/New Jersey')   
def new_jersey():
    state_dict = {}
    state_dict["State"] = states_object[34]["state"]
    state_dict["positive cases"] = states_object[34]["positive"]
    state_dict["Negative cases"] = states_object[34]["negative"]
    state_dict["Total Tests"] = states_object[34]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[34]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[34]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[34]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/New Mexico')   
def new_mexico():
    state_dict = {}
    state_dict["State"] = states_object[35]["state"]
    state_dict["positive cases"] = states_object[35]["positive"]
    state_dict["Negative cases"] = states_object[35]["negative"]
    state_dict["Total Tests"] = states_object[35]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[35]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[35]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[35]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/New York')   
def new_york():
    state_dict = {}
    state_dict["State"] = states_object[37]["state"]
    state_dict["positive cases"] = states_object[37]["positive"]
    state_dict["Negative cases"] = states_object[37]["negative"]
    state_dict["Total Tests"] = states_object[37]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[37]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[37]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[37]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/North Carolina')   
def north_carolina():
    state_dict = {}
    state_dict["State"] = states_object[30]["state"]
    state_dict["positive cases"] = states_object[30]["positive"]
    state_dict["Negative cases"] = states_object[30]["negative"]
    state_dict["Total Tests"] = states_object[30]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[30]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[30]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[30]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/North Dakota')   
def north_dakota():
    state_dict = {}
    state_dict["State"] = states_object[31]["state"]
    state_dict["positive cases"] = states_object[31]["positive"]
    state_dict["Negative cases"] = states_object[31]["negative"]
    state_dict["Total Tests"] = states_object[31]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[31]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[31]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[31]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Ohio')   
def ohio():
    state_dict = {}
    state_dict["State"] = states_object[38]["state"]
    state_dict["positive cases"] = states_object[38]["positive"]
    state_dict["Negative cases"] = states_object[38]["negative"]
    state_dict["Total Tests"] = states_object[38]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[38]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[38]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[38]["death"]

    return jsonify(state_dict)   

@app.route('/api/state/Oklahoma')   
def oklahoma():
    state_dict = {}
    state_dict["State"] = states_object[39]["state"]
    state_dict["positive cases"] = states_object[39]["positive"]
    state_dict["Negative cases"] = states_object[39]["negative"]
    state_dict["Total Tests"] = states_object[39]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[39]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[39]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[39]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Oregon')   
def oregon():
    state_dict = {}
    state_dict["State"] = states_object[40]["state"]
    state_dict["positive cases"] = states_object[40]["positive"]
    state_dict["Negative cases"] = states_object[40]["negative"]
    state_dict["Total Tests"] = states_object[40]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[40]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[40]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[40]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Pennsylvania')   
def pennsylvania():
    state_dict = {}
    state_dict["State"] = states_object[41]["state"]
    state_dict["positive cases"] = states_object[41]["positive"]
    state_dict["Negative cases"] = states_object[41]["negative"]
    state_dict["Total Tests"] = states_object[41]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[41]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[41]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[41]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Rhode Island')   
def rhode_island():
    state_dict = {}
    state_dict["State"] = states_object[43]["state"]
    state_dict["positive cases"] = states_object[43]["positive"]
    state_dict["Negative cases"] = states_object[43]["negative"]
    state_dict["Total Tests"] = states_object[43]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[43]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[43]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[43]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/South Carolina')   
def south_carolina():
    state_dict = {}
    state_dict["State"] = states_object[44]["state"]
    state_dict["positive cases"] = states_object[44]["positive"]
    state_dict["Negative cases"] = states_object[44]["negative"]
    state_dict["Total Tests"] = states_object[44]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[44]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[44]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[44]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/South Dakota')   
def south_dakota():
    state_dict = {}
    state_dict["State"] = states_object[45]["state"]
    state_dict["positive cases"] = states_object[45]["positive"]
    state_dict["Negative cases"] = states_object[45]["negative"]
    state_dict["Total Tests"] = states_object[45]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[45]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[45]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[45]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Tennessee')   
def tennessee():
    state_dict = {}
    state_dict["State"] = states_object[46]["state"]
    state_dict["positive cases"] = states_object[46]["positive"]
    state_dict["Negative cases"] = states_object[46]["negative"]
    state_dict["Total Tests"] = states_object[46]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[46]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[46]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[46]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Texas')   
def texas():
    state_dict = {}
    state_dict["State"] = states_object[47]["state"]
    state_dict["positive cases"] = states_object[47]["positive"]
    state_dict["Negative cases"] = states_object[47]["negative"]
    state_dict["Total Tests"] = states_object[47]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[47]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[47]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[47]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Utah')   
def utah():
    state_dict = {}
    state_dict["State"] = states_object[48]["state"]
    state_dict["positive cases"] = states_object[48]["positive"]
    state_dict["Negative cases"] = states_object[48]["negative"]
    state_dict["Total Tests"] = states_object[48]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[48]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[48]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[48]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Vermont')   
def vermont():
    state_dict = {}
    state_dict["State"] = states_object[51]["state"]
    state_dict["positive cases"] = states_object[51]["positive"]
    state_dict["Negative cases"] = states_object[51]["negative"]
    state_dict["Total Tests"] = states_object[51]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[51]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[51]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[51]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Virginia')   
def virginia():
    state_dict = {}
    state_dict["State"] = states_object[49]["state"]
    state_dict["positive cases"] = states_object[49]["positive"]
    state_dict["Negative cases"] = states_object[49]["negative"]
    state_dict["Total Tests"] = states_object[49]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[49]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[49]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[49]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Washington')   
def washington():
    state_dict = {}
    state_dict["State"] = states_object[52]["state"]
    state_dict["positive cases"] = states_object[52]["positive"]
    state_dict["Negative cases"] = states_object[52]["negative"]
    state_dict["Total Tests"] = states_object[52]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[52]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[52]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[52]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/West Virginia')   
def west_virginia():
    state_dict = {}
    state_dict["State"] = states_object[54]["state"]
    state_dict["positive cases"] = states_object[54]["positive"]
    state_dict["Negative cases"] = states_object[54]["negative"]
    state_dict["Total Tests"] = states_object[54]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[54]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[54]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[54]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Wisconsin')   
def wisconsin():
    state_dict = {}
    state_dict["State"] = states_object[53]["state"]
    state_dict["positive cases"] = states_object[53]["positive"]
    state_dict["Negative cases"] = states_object[53]["negative"]
    state_dict["Total Tests"] = states_object[53]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[53]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[53]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[53]["death"]

    return jsonify(state_dict)  

@app.route('/api/state/Wyoming')   
def wyoming():
    state_dict = {}
    state_dict["State"] = states_object[55]["state"]
    state_dict["positive cases"] = states_object[55]["positive"]
    state_dict["Negative cases"] = states_object[55]["negative"]
    state_dict["Total Tests"] = states_object[55]["totalTestResults"]
    state_dict["Hospitalized currently"] = states_object[55]["hospitalizedCurrently"]
    state_dict["Hospitalized Cumalative"] = states_object[55]["hospitalizedCumulative"]
    state_dict["Deaths"] = states_object[55]["death"]

    return jsonify(state_dict)  


if __name__ == '__main__':
    app.run(debug=True)