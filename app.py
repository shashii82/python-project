from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Replace this with your authentication logic
    if username == 'shashi' and password == 'passw0rd':
        return jsonify({'success': True, 'username': username})
    else:
        return jsonify({'success': False})

if __name__ == '__main__':
    app.run(debug=True)
