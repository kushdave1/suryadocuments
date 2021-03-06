import * as React from "react";
import {DataTableCell, Table, TableBody, TableCell, TableHeader} from "../../../src";
import {PdfContainer} from "../PdfContainer";
import {generateRandomData, HumanRow} from "../../data/Humans";

interface ZebraTableHeaderState {
    data: HumanRow[];
}

export class ZebraTable extends React.Component<{}, ZebraTableHeaderState> {
    state = {
        data: generateRandomData(20)
    };

    render() {
        return (
            <PdfContainer>
                <Table
                    data={this.state.data}
                >
                    <TableHeader>
                        <TableCell>
                            First Name
                        </TableCell>
                        <TableCell>
                            Last Name
                        </TableCell>
                        <TableCell>
                            DOB
                        </TableCell>
                        <TableCell>
                            Country
                        </TableCell>
                        <TableCell>
                            Phone Number
                        </TableCell>
                    </TableHeader>
                    <TableBody evenRowColor="lightgray">
                        <DataTableCell getContent={(r) => r.firstName}/>
                        <DataTableCell getContent={(r) => r.lastName}/>
                        <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                        <DataTableCell getContent={(r) => r.country}/>
                        <DataTableCell getContent={(r) => r.phoneNumber}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
