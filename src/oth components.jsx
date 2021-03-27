import SearchBar from 'material-ui-search-bar';

	 <SearchBar
										component="form"
										align="center"
										className={classes.rootD}
										xs={4}
										placeholder="Search a Content"
										value={state.value}
										onChange={(newValue) =>
											this.setState({ value: newValue })
										}
										`onRequestSearch={() =>
											doSomethingWith(this.state.value)
										}`
									/> 

