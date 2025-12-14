import { Button, Card, CardBody, CardFooter, CardHeader, Chip, CircularProgress, Divider, Link } from '@nextui-org/react';
import type {FC} from 'react';

interface Props {}

const Dashboard: FC<Props> = () => {
return <div>
  <Button color="primary">Button</Button>
  <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
      <CardBody className="items-center justify-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          showValueLabel
          strokeWidth={4}
          value={70}
        />
      </CardBody>

      <CardFooter className="items-center justify-center pt-0">
        <Chip
          classNames={{
            base: "border border-white/30",
            content: "text-white/90 text-sm font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip>
      </CardFooter>
    </Card>
</div>;

};

export default Dashboard;