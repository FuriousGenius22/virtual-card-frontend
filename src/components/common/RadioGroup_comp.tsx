import { RadioGroup, Radio, Select, SelectItem, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const RadioCollapse = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <div className="border rounded-3xl w-72 h-[40px] flex flex-col justify-start">
                    <Button className="rounded-3xl" value={"What to Show?"}><h1>What to Show?</h1></Button>
                    <Select>
                        <SelectItem>All accounts and cards</SelectItem>
                    </Select>
                </div>

                <div className="border rounded-3xl w-72 h-[40px] flex flex-col justify-start">
                    <Button className="rounded-3xl" value={"What to Show?"}><h1>What to Show?</h1></Button>
                    <Select isDisabled defaultSelectedKeys={"Cards"}>
                        <SelectItem>All accounts and cards</SelectItem>
                    </Select>
                </div>
            </div>

            <div>
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="bordered">Statements</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Dropdown menu with shortcut" variant="flat">
                        <DropdownItem key="new" shortcut="⌘N">
                            New file
                        </DropdownItem>
                        <DropdownItem key="copy" shortcut="⌘C">
                            Copy link
                        </DropdownItem>
                        <DropdownItem key="edit" shortcut="⌘⇧E">
                            Edit file
                        </DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" shortcut="⌘⇧D">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    );
};

export default RadioCollapse;
