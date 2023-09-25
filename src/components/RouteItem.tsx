import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

interface Properties {
  name: string;
}

function RouteItem({ name }: Properties) {
  return (
    <Card>
      <CardHeader title={name} />
      <CardContent>Hei</CardContent>
    </Card>
  );
}

export { RouteItem };
