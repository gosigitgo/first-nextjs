'use client'

import Item from './item'
import React, {useEffect, useState} from "react"
import {SkeletonPost} from './skeletonpost'

export const TodoList = ({todos} : any) => {
    const [loading,
        setLoading] = useState(true);
    useEffect(() => {
        if (todos) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [todos]);

    let skeletonTodos = Array(5).fill(0);

    return (loading
        ? <div className="grid grid-cols-1 md:grid-cols-5 gap-3 justify-around"> {(skeletonTodos.map((index : number) => <SkeletonPost key={index}/> ))}</div>
        : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 justify-around">
                {todos
                    ?.todos
                        ?.map((todo : any, index : number) => (<Item key={index} todo={todo}/>))}
            </div>
        ));
};
