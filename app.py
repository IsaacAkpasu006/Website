from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/page1')
def page1():
    return render_template('page1.html')


@app.route('/Ultimate')
def Ultimate():
    return render_template('Ultimate.html')


@app.route('/Nabbies')
def Nabbies():
    return render_template('Nabbies.html')


@app.route('/Omega')
def Omega():
    return render_template('Omega.html')


@app.route('/Munch Box')
def MunchBox():
    return render_template('Munch Box.html')


@app.route('/script')
def script():
    return render_template('script.html')




if __name__ == '__main__':
    app.run(debug=True)