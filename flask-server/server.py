from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
model = []

CORS(app)

@app.route('/books', methods=['POST'])
def createBook():
    print(request.json)
    model.append({
        'id': request.json['id'],
        'title': request.json['title'],
        'nopages': request.json['nopages'],
        'category': request.json['category'],
        'authors': request.json['authors']
    })
    return jsonify(model)

@app.route('/books', methods=['GET'])
def getBooks():
    books = []
    for book in model:
        books.append({
            'id': book['id'],
            'title': book['title'],
            'nopages': book['nopages'],
            'category': book['category'],
            'authors': book['authors']
        })
    return jsonify(books)

@app.route('/books/<id>', methods=['DELETE'])
def deleteBook(id):
    for i in range(len(model)):
        if model[i]['id'] == id:
            del model[i]
            break
    return jsonify({'message': 'book deleted'})


if __name__ == '__main__':
    app.run(debug=True)