# Version 1: Simple page that displays user login
# Version 2: URL redirection to new page "welcome" with greetings "Hello User"

from flask import Flask, render_template, request, jsonify, redirect, url_for

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
        # Redirect to the welcome page with the username
        return jsonify({'success': True, 'username': username})
    else:
        return jsonify({'success': False, 'error': 'Invalid credentials'})

@app.route('/welcome/<username>')
def welcome(username):
    return render_template('welcome.html', username=username)

if __name__ == '__main__':
    app.run(debug=True)

