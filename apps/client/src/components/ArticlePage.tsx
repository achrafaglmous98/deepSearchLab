import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Article } from './ArticlesGrid';

const ArticlePage = () => {
  const [article, setArticle] = useState<Article>();
  const [showFullText, setShowFullText] = useState(false);
  const { _id } = useParams<{ _id: string }>();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${_id}`);
      const data = await response.json();
      // remove single quotes and square brackets from the string
      const imagesArray = data.images.replace(/[\[\]']+/g, '').split(', ');
      // create the updated article object with an array of image links
      const updatedArticle = { ...data, images: imagesArray };
      setArticle(updatedArticle);
    };
    fetchArticle();
  }, [_id]);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  const { title, date, category, subcategory, authors, text, images } = article;

  const shortText = text.slice(0, 1000);
  const textToShow = showFullText ? text : shortText;
  const textToggleIcon = showFullText ? faAngleUp : faAngleDown;
  const textToggleText = showFullText ? 'Show Less' : 'Show More';

  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
          <div className="d-flex mb-2">
            <span className="badge bg-primary me-1">{category}</span>
            <span className="badge bg-secondary">{subcategory}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <p>Date: {date}</p>
          <p>Authors: {authors.join(', ')}</p>
        </Col>
        <Col md={8}>
          <p>{textToShow}</p>
          {text.length > 1000 && (
            <Button variant="link" className="p-0" onClick={toggleShowFullText}>
              <FontAwesomeIcon icon={textToggleIcon} /> {textToggleText}
            </Button>
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h2>Images</h2>
          <Row>
            {images.map((imageUrl: string | undefined, index: number) => (
              <Col xs={6} md={4} key={index}>
                <Image src={imageUrl} fluid />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;
