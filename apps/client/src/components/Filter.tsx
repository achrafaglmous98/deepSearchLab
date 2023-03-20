import React, { useState } from 'react';
import { Form, Button, Collapse, Row, Col } from 'react-bootstrap';

interface FilterProps {
  onFilterChange: (newFilters: any) => void;
}

function Filter({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState({
    category: '',
  });

  const categories = [
    'UK',
    'World',
    'Business',
    'Health',
    'Entertainment & Arts',
    'Science',
    'Tech',
    'Climate',
    'War in Ukraine',
    'In Pictures',
    'Coronavirus',
    'Reality Check',
    'Long Reads',
    'Newsbeat',
    'Stories',
    'World News TV',
  ];

  const [isOpen, setIsOpen] = useState(false);

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onFilterChange(filters);
  }

  return (
    <>
      <Button
        variant="dark"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="filter-collapse"
        aria-expanded={isOpen}
      >
        Filter
      </Button>
      <Collapse in={isOpen}>
        <div id="filter-collapse">
        <Form onSubmit={handleSubmit}>
      <Row className="align-items-end">
        <Col md={9}>
          <Form.Group controlId="category">
            <Form.Label> </Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={filters.category}
              onChange={handleSelectChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Button variant="dark" type="submit" className="w-100">
            Apply Filters
          </Button>
        </Col>
      </Row>
    </Form>
        </div>
      </Collapse>
    </>
  );
}

export default Filter;
