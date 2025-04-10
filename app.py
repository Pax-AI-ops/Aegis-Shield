from flask import Flask, render_template, jsonify
from datetime import datetime
import socket

app = Flask(__name__)
start_time = datetime.now()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/status")
def status():
    uptime = str(datetime.now() - start_time).split('.')[0]
    return jsonify({
        "status": "online",
        "hostname": socket.gethostname(),
        "uptime": uptime,
        "version": "freemium-v1.0"
    })

@app.route("/version")
def version():
    return jsonify({
        "version": "freemium-v1.0",
        "build": "OMEGA_PUBLIC_2404",
        "maintainer": "SYNTEX Security"
    })

# Register Blueprint
from website.routes.status_routes import status_routes
app.register_blueprint(status_routes)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
