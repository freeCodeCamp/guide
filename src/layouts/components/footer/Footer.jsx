import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import FontAwesome from 'react-fontawesome';

function Footer() {
  return (
      <Col xs={ 12 }>
        <footer className='flexSpaceAround'>
          <div className='flexSpaceAround'>
            <span>
              {
                'If you get value out of these guides, consider supporting ' +
                'our nonprofit: '
              }
              <Button
                className='button'
                href='https://freecodecamp.org/donate'
                target='_blank'
                >
                Donate
              </Button>
            </span>
          </div>
          <div className='flexSpaceAround'>
            <a
              href='https://github.com/freecodecamp/guides'
              rel='nofollow'
              target='_blank'
              >
              <FontAwesome
                className='footerIcon'
                name='github'
                size='3x'
              />
            </a>
          </div>
        </footer>
      </Col>
  );
}

Footer.displayName = 'Footer';

export default Footer;
