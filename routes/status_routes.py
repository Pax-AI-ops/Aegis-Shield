from flask import Blueprint, jsonify, render_template
import socket
from datetime import datetime

status_routes = Blueprint('status_routes', __name__)
start_time = datetime.now()

@status_routes.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@status_routes.route("/status", methods=["GET"])
def status():
    uptime = str(datetime.now() - start_time).split(".")[0]
    return jsonify({
        "status": "online",
        "hostname": socket.gethostname(),
        "uptime": uptime,
        "version": "OMEGA-PUBLIC-v1.0"
    })

@status_routes.route("/version", methods=["GET"])
def version():
    return jsonify({
        "version": "OMEGA-PUBLIC-v1.0",
        "build": "OMEGA_PUBLIC_2404"
    })
