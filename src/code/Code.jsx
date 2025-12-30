import React from 'react'
import CodeComponent from './CodeComponent'

function Code() {
    return (
        <>
        <div className='min-h-screen bg-slate-900'>

        <div className=' w-4/5 m-auto'>

            <CodeComponent heading='heelo' text='this is text'>
                {`
function greet(name) {
    return \`Hello, \${name}\`;
    }
    
    console.log(greet("World"));
    `}
            </CodeComponent>
            <CodeComponent heading='heelo' text='this is text'>
                {`
function greet(name) {
    return \`Hello, \${name}\`;
    }
    
    console.log(greet("World"));
    `}
            </CodeComponent>
    </div>
    </div>
        </>
    )
}

export default Code