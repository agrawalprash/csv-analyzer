# Configure the script to stop if an error occurs somewhere
set -ve

#### Prepare a development environment ####

# Create a new venv if not already existing
VENV_DIR='.csv-analyzer-env'
if [ ! -d $VENV_DIR ]; then
    venv $VENV_DIR
fi

# Activate it
source $VENV_DIR/bin/activate
which python

# Install pip in it
if [ ! -f get-pip.py ]; then
    curl -O https://bootstrap.pypa.io/get-pip.py
fi
python get-pip.py

#### Install/develop current package ####
CWD=$(pwd)
cd $CWD
install_or_develop=${1:-'install'}
python setup.py $install_or_develop