import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CardMovies({ movies }) {
  const router = useRouter();

  return (
    <>
      <div>
        <Row className="row">
          {movies.map((item, key) => (
            <>
              <Col className="col-lg-3 col-sm-6 col-md-6 mb-4" xs="6">
                <div onClick={() => router.push(`/movies/${item.id}`)}>
                  <Card as="a" className="card-movies">
                    <img
                      alt=""
                      src={`${process.env.NEXT_PUBLIC_IMAGE_MOVIES_BASE_URL}${item.poster_path}`}
                    />
                    {/* <Image src={"/logoraya.png"} height={100} width={100} className="img-responsive" /> */}
                    <CardBody>
                      <CardTitle>{item.title}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {item.original_language}
                      </CardSubtitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {item.original_title}
                      </CardSubtitle>
                      <CardText className="card-text-movies text-muted">
                        {item.release_date}
                      </CardText>
                      <Button>
                        <a href="#">Detail</a>
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  );
}
