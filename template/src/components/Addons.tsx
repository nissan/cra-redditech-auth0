import React, { Fragment } from 'react';
import path from 'path';
import moment from 'moment';
import { Alert, Typography, Divider, Icon } from 'antd';

const Addons = () => {
  const { Paragraph, Text } = Typography;
  const customValue = process.env.REACT_APP_CUSTOM_VALUE;
  return (
    <Fragment>
      <Paragraph>
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text code={true}>REACT_APP_CUSTOM_VALUE</Text> loaded from{' '}
                <Text code={true}>{path.join(__dirname, '.env')}</Text> and is
                set to
                <Text strong={true}> {customValue || 'nothing yet'}</Text> for
                environment in <Text strong={true}>{process.env.NODE_ENV}</Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/">
                    here{' '}
                  </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text code={true}>moment</Text> is enabled. Your locale is{' '}
                <Text strong={true}>{moment.locale()}</Text>.
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://momentjs.com/">here </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Icon type="exclamation-circle" />
                <Text>
                  <code>antd</code> is enabled
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://ant.design/docs/react/introduce">here </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text>
                  <code>react-router-dom</code> is enabled
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://reacttraining.com/react-router/web/guides/quick-start">
                    here
                  </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
      </Paragraph>
    </Fragment>
  );
};

export default Addons;
