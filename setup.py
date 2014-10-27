""" Setup for the csv-analyzer package.
"""

from setuptools import setup, find_packages

# Extract requirements from requirements.txt file
with open('requirements.txt') as f:
    requirements = f.read().splitlines()

setup(
    name='CSVAnalyzer',
    version='0.1',
    description='A tool to upload and analyze huge CSV files',
    author='Prashant Agrawal',
    author_email='agrawal.prash@gmail.com',
    license='Free BSD',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    data_files=[],
    install_requires=requirements,
    develop_requires=requirements
)
