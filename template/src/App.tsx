import React from 'react';
import moment from 'moment';
import { Alert, Typography, Divider, Icon } from 'antd';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <div className="App">
      <header className="App-header">
        <Title>
          <img src={logo} className="App-logo" alt="logo" />
        </Title>
        <Paragraph>
          Edit <code>src/App.tsx</code> and save to reload.
        </Paragraph>
        <Divider dashed={true} />
        <Paragraph>
          <Alert
            banner={true}
            type="success"
            message={
              <Paragraph>
                <Text code={true}>Moment</Text> is enabled. Your locale is{' '}
                <Text strong={true}>{moment.locale()}</Text>.
              </Paragraph>
            }
          />
          <Divider dashed={true} />
          <Alert
            banner={true}
            type="success"
            message={
              <Paragraph>
                <Icon type="exclamation-circle" />
                <Text>
                  <code>antd</code> is enabled
                </Text>
              </Paragraph>
            }
          />
        </Paragraph>
        <Divider dashed={true} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
