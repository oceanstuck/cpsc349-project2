import './skills.css';

const Skills = () =>
{
    return(
        <div className="skills">
            <h2>Skills</h2>
            <Container>
                <Row>
                    <Col md={4}>
                        <Image src="images/cpp.png" alt="C++" rounded />
                    </Col>
                    <Col md={4}>
                        <Image src="images/csharp.png" alt="C#" rounded />
                    </Col>
                    <Col md={4}>
                        <Image src="images/python.png" alt="Python" rounded />
                    </Col>
                    <Col md={4}>
                        <Image src="images/php.png" alt="PHP" rounded />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Image src="images/html5.png" alt="HTML" rounded />
                    </Col>
                    <Col md={4}>
                        <Image src="images/css.png" alt="CSS" rounded />
                    </Col>
                    <Col md={4}>
                        <Image src="images/js.png" alt="Javascript" rounded />
                    </Col>
                    <Col md={4}>
                        <Image src="image/sql.png" alt="SQL" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;