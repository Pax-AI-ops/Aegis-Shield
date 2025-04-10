from flask import Blueprint, render_template

routes = Blueprint("routes", __name__)

@routes.route("/")
def index():
    return render_template("index.html")

@routes.route("/about")
def about():
    return render_template("about.html")

@routes.route("/projects")
def projects():
    return render_template("projects.html")

@routes.route("/contact")
def contact():
    return render_template("contact.html")

@routes.route("/privacy")
def privacy():
    return render_template("privacy.html")

@routes.route("/tos")
def tos():
    return render_template("tos.html")

@routes.route("/upgrade")
def upgrade():
    return render_template("upgrade.html")

@routes.route("/donate")
def donate():
    return render_template("donate.html")
