import React from 'react';
import Slick from 'react-slick';
import styles from './slider';
import Link from 'react-router-dom';

export default function sliderTemplate(props) {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  switch (props.type) {
    case 'featured':
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={styleMedia.featured_item}>
              <div
                className={styleMedia.featured_image}
                style={{ background: `url(../images/articles/${item.image})` }}
              />
              <Link to={`/articles/${item.id}`} />
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
}
