from flask import Blueprint, render_template, request, jsonify
import socket
from datetime import datetime

routes = Blueprint('routes', __name__)
start_time = datetime.now()

@routes.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@routes.route("/about", methods=["GET"])
def about():
    return render_template("about.html")

@routes.route("/projects", methods=["GET"])
def projects():
    return render_template("projects.html")

@routes.route("/privacy", methods=["GET"])
def privacy():
    return render_template("privacy.html")

@routes.route("/terms", methods=["GET"])
def terms():
    return render_template("terms.html")

@routes.route("/upgrade", methods=["GET"])
def upgrade():
    return render_template("upgrade.html")

@routes.route("/donate", methods=["GET"])
def donate():
    return render_template("donate.html")

@routes.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        # For now, just print. In production, send to contact@syntexsecurity.com or store it.
        print(f"New message from {name} <{email}>: {message}")
        return jsonify({"status": "success", "message": "Message received."})
    return render_template("contact.html")

@routes.route("/download", methods=["GET"])
def download():
    return render_template("download.html")
