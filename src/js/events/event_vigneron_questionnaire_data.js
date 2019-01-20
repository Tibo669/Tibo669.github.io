const event_question_data_json = `{
  "1": {
    "question": "Comment appelle-t-on un pied de vigne ?",
    "responses": {
        "1": "Un ceps",
        "2": "Une câpre",
        "3": "Un arbuste",
        "4": "Un pédoncule"
      },
    "good_response": "1"
  },
  "2": {
    "question": "Comment appelle-t-on une année dans le milieu viticole ?",
    "responses": {
        "1": "Un millénium",
        "2": "Un millésime",
        "3": "Un magnum",
        "4": "Un primeur"
      },
    "good_response": "2"
  }
}`;

let event_question_data_map = JSON.parse(event_question_data_json);
