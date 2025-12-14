import { Button, Card, CardBody, CardFooter, CardHeader, Chip, CircularProgress, Divider, Link } from '@nextui-org/react';
import type {FC} from 'react';
import React from 'react';

interface Props {}

const Dashboard: FC<Props> = () => {

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <CircularProgress
      aria-label="Loading..."
      color="warning"
      showValueLabel={true}
      size="lg"
      value={value}
    />
  )

};
//This is for git hub!

export default Dashboard;