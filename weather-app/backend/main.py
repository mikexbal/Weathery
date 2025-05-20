from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return f"<h1>Hello Michael!</h1>"

@app.route("/testing")
def admin():
    return redirect(url_for("home"))

@app.route('/search', methods=['GET'])
def search():
    city = request.args.get('city', '')
    # Process search
    results = f"You searched for: {city}"
    return results

if __name__ == "__main__":
    app.run()