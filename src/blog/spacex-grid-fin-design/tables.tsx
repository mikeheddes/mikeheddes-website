import { Table, TableCell, TableHeader } from "../../components/table";

export function AluminumPropertiesTable() {
  return (
    <Table columns={3}>
      <TableHeader>Property</TableHeader>
      <TableHeader>Value</TableHeader>
      <TableHeader>Unit</TableHeader>
      <TableCell subtle>Elastic modules</TableCell>
      <TableCell>71.7</TableCell>
      <TableCell>GPa</TableCell>
      <TableCell subtle>Shear modules</TableCell>
      <TableCell>26.9</TableCell>
      <TableCell>GPa</TableCell>
      <TableCell subtle>Tensile strength</TableCell>
      <TableCell>572</TableCell>
      <TableCell>MPa</TableCell>
      <TableCell subtle>Yield strength</TableCell>
      <TableCell>503</TableCell>
      <TableCell>MPa</TableCell>
      <TableCell subtle>Melting point</TableCell>
      <TableCell>750 - 908</TableCell>
      <TableCell>K</TableCell>
    </Table>
  );
}

export function MaxStressTable() {
  return (
    <Table columns={3}>
      <TableHeader>Property</TableHeader>
      <TableHeader>First frame</TableHeader>
      <TableHeader>Second frame</TableHeader>
      <TableCell subtle>Time</TableCell>
      <TableCell>+437 s</TableCell>
      <TableCell>+481 s</TableCell>
      <TableCell subtle>Speed</TableCell>
      <TableCell>
        1377 m s<sup>-1</sup>
      </TableCell>
      <TableCell>
        811 m s<sup>-1</sup>
      </TableCell>
      <TableCell subtle>Altitude</TableCell>
      <TableCell>58.6 km</TableCell>
      <TableCell>19.2 km</TableCell>
      <TableCell subtle>Air pressure</TableCell>
      <TableCell>7.24 kPa</TableCell>
      <TableCell>46.61 kPa</TableCell>
      <TableCell subtle>Temperature</TableCell>
      <TableCell>216 K</TableCell>
      <TableCell>249 K</TableCell>
      <TableCell subtle>Air density</TableCell>
      <TableCell>
        0.12 kg m<sup>-3</sup>
      </TableCell>
      <TableCell>
        0.65 kg m<sup>-3</sup>
      </TableCell>
    </Table>
  );
}

/*
| Time     | Speed       | Altitude      | Air pressure       | Temperature     | Air density            |
|----------|-------------|---------------|--------------------|-----------------|------------------------|
| T+437 s  | 1377 m/s    | 58.6 km       | 7.24 kPa           | 216 K           | 0.12 kg/m<sup>3</sup>  |
| T+481 s  | 811 m/s     | 19.2 km       | 46.61 kPa          | 249 K           | 0.65 kg/m<sup>3</sup>  |
*/
