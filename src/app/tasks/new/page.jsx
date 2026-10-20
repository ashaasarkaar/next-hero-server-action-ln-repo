'use client'
import { NewTaskAction } from "@/lib/actions";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select, Form, FieldError } from "@heroui/react";

const NewTask = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="text-5xl mb-5">Add a New Task</h2>
            <div>
                <Form action={NewTaskAction} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text" variant="secondary" isRequired
                        minLength={5}
                        validate={(value) => {
                            if (value.length < 5) {
                                return "Password must be at least 5 characters or more long";
                            }
                        }}
                    >
                        <Label>Title</Label>
                        <Input placeholder="Enter your Task Title" />
                         <FieldError />
                    </TextField>
                    <TextField className="w-full" name="description" type="text" variant="secondary">
                        <Label>Description</Label>
                        <Input placeholder="Enter your Task Description" />
                    </TextField>

                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>

                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />

                                </ListBox.Item>

                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />

                                </ListBox.Item>

                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>

                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />

                                </ListBox.Item>

                                <ListBox.Item id="progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />

                                </ListBox.Item>

                                <ListBox.Item id="completed" textValue="Completed">
                                    Completed
                                    <ListBox.ItemIndicator />

                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField className="w-full" name="assignedTo" variant="secondary">
                        <Label>Assigned To</Label>
                        <Input placeholder="Enter your Assigned To" />
                    </TextField>


                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" >Submit Task</Button>
                    </Modal.Footer>
                </Form>
            </div>

        </div>
    );
};

export default NewTask;