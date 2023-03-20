import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticlesByCategoryChart from "./ArticlesByCategoryChart";

const Analytics = () => {
  return (
    <>
      <div className="bg-dark text-white py-3">
        <Container>
          <h1>Analytics</h1>
          <p className="lead">
            This is the analytics tab of the app. Here you can view and analyze
            the data related to the articles scraped from BBC.
          </p>
        </Container>
      </div>
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Articles by Category</h2>
            <ArticlesByCategoryChart />
            <p className="text-center mt-4">
              This chart shows the number of articles scraped from BBC's website in each category. As of the last update, the "UK" category has the highest number of articles at 1,213, followed by "Business" at 473 and "Health" at 194. The categories with the fewest articles are "World News TV" with only 6 articles and "Stories" with only 17 articles. This data can be used to gain insights into the topics that BBC covers the most and the least, and to identify trends in their coverage over time.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Analytics;
