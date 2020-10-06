import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default class TodoList extends Component {
  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.todos.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem
                        text={item.text}
                        id={item.id}
                        done={item.done}
                        onDone={this.props.onDone}
                        onRemove={this.props.onRemove}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
