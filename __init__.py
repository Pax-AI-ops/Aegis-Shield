from flask import Flask
from website.routes.status_routes import status_routes

def create_app():
    app = Flask(__name__)
    app.register_blueprint(status_routes)
    return app
