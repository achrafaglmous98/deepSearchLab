# DeepSearchLab — Visualization Dashboard (React + NestJS + Vite)

This app is the frontend and backend interface built to visualize the results of the BBC news scraping and analysis pipeline.

## Overview

After collecting BBC news article data (via Apache Airflow), this app displays and explores the results using a modern web interface. The backend (NestJS) serves the processed data from MongoDB, and the frontend (React + Vite) presents it using Bootstrap styling.

## Features

- Clean, responsive UI built with React + Bootstrap + Vite
- Backend API built with NestJS to serve MongoDB content
- Filterable, categorized views of news articles and metadata
- Supports integration with D3.js or other visualization libraries (future scope)

## Tech Stack

- **Frontend:** React, Vite, Bootstrap
- **Backend:** NestJS (Node.js framework)
- **Database:** MongoDB
- **Styling:** Bootstrap 5
