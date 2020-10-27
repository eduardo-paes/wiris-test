import React, {useEffect} from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

export default  function TextEditor (props) {
    const {text, setText} = props;

    // eslint-disable-next-line
    useEffect(() => { setText(text) }, [text]);
   
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setText(data);
    }

    return (
        <CKEditor
            editor={ Editor }
            name="ckeditor"
            data={ text }
            onInit={ editor => { 
                editor.ui.focusTracker.on('change:isFocused', (evt, name, value) => { console.log(value) });
            }}
            onError={ err => console.log(err) }
            onChange={ handleEditorChange }
        />
    )
}