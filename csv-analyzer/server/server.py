from flask import Flask, Response, request

app = Flask(__name__)

@app.route('/upload_csv/<name>', method='POST')
def upload_csv(name, data):
    """
    Upload the given data as a CSV file identified with the given name.

    If a CSV file with that name already exists, the data is simply appended to
    that CSV file.
    """
    pass


@app.route('/read_csv/<name>', method='GET')
@app.route('/read_csv/<name>/<start>', method='GET')
def read_csv(name, start=0):
    """
    Read the CSV file with the given name. Start reading from the given row
    number.
    """
    pass

if __name__ == "__main__":
    app.run(port=5000, debug=True)


