import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import Title from '../../Title';

import UploaderWindow from '@webutils/uploader';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function Userlist() {
	const [imgsrc, setImgsrc] = useState('');
	const [name, setName] = useState('');
	const [blogText, setBlogText] = useState('');
	const [desc, setDesc] = useState('');
	const [starttime, setStarttime] = useState('');
	const [editorChange, setEditorChange] = useState();

	function submitform(event) {
		event.preventDefault();
		axios({
			method: 'post',
			url: global.config.apiurl + 'blog/create',
			data: qs.stringify({
				name: name,
				image: imgsrc,
				description: blogText,
				date: starttime,
				Shortdescription: desc,
			}),
			headers: {
				'content-type':
					'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((response) => {
				console.log(response);
				if (response.data.status === 'success') {
					alert('blog Created');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function onChange(e) {
		setBlogText(e.target.value);
	}

	function upload() {
		UploaderWindow('my-uploader-12')
			.open()
			.then((res) => {
				const alldata = res[0].url;
				setImgsrc(alldata);
			});
	}
	return (
		<div>
			<Title children="Create a New Blog  " />
			<form onSubmit={submitform} ClassName="CreateContest_form">
				<label for="name">Blog Title:</label>
				<input
					className="input"
					type="text"
					placeholder="blog Name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{/* date */}
				<label for="date"> Blog date:</label>
				<input
					type="datetime-local"
					className="input"
					onChange={(e) => setStarttime(e.target.value)}
					name="date"
				/>
				<label for="short_Desc">Short Description:</label>
				<textarea
					id="short_Desc"
					className="input"
					name="short_Desc"
					rows="4"
					placeholder="this text is shown is blog card "
					onChange={(e) => setDesc(e.target.value)}></textarea>
				<label for="Blog_Desc">Blog text:</label>
				<div className="Blog_description">
					<Editor
						editorState={editorChange}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={setEditorChange}
					/>
				</div>
				<button
					className="submit_btn upoad_btn"
					type="button"
					onClick={upload}>
					Upload
				</button>
				<button className="submit_btn " type="submit">
					Create
				</button>
			</form>
		</div>
	);
}
