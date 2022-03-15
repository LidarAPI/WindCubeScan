define({
  "name": "Lidar API documentation",
  "version": "1.2.0",
  "description": "",
  "title": "Lidar API documentation",
  "url": "http://host/lidar_api/v1",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-09-16T12:45:21.307Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  },
  "header": {
    "title": "Introduction",
    "content": "<h2>Leosphere Web API architecture</h2>\n<p>Based on simple REST principles, the Leosphere Web API is organized around 5 categories of actions:</p>\n<ul>\n<li>Authentication : Connection management.</li>\n<li>Data : Wind and aerosols data retrieval.</li>\n<li>Monitoring : Lidar's monitoring through status , activities environmental data and logs retrieval.</li>\n<li>Configuration : scans, settings and resolution management.</li>\n<li>Control :  Lidar's acquisition control and programming.</li>\n</ul>\n<p>The Leosphere Web API is based on REST principles. Data resources are accessed via standard HTTP requests in UTF-8 encoding to a server hosted in the PC of the Lidar.\nThe base address of Leosphere Web API is http://host, where “host” is your Lidar IP address. All requests to Leosphere Web API require authentication. This is achieved by sending a valid access token in the request header. Only standard users or more have the right to use the API.\nDespite our efforts on creating, reviewing and validating this API and its documentation, should you notice any bug, typo error, or have any feedback, please contact our technical support team at support@leosphere.com.</p>\n<h2>Syntax generic principles</h2>\n<p>Most of the requests respond with JSON data, but some respond with binary data (files).\nIn this documentation, all parameters in URL ending with an interrogation mark, are optional.\nAn object is a dataset of both properties and values. It is represented in JSON by { “property1”: “value1”, “property2”:”value2”}. An object[] is an array of this kind of object, represented in JSON by [{“commonProperty”:”value1”}, {“commonProperty”:”value2”}].</p>\n<h2>HTTPS</h2>\n<p>The web server hosted by the Lidar is able to use HTTPS or unsecured HTTP. Use of HTTPS is recommended. Shall you use HTTP, we highly recommend you to use this API on protected network or behind a HTTPS protected reverse proxy, to avoid any man-in-the-middle security breach. Leosphere can in no manner be held responsible in case of loss and/or leakage of data.</p>\n<h2>Available requests</h2>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:center\">Group</th>\n<th style=\"text-align:center\">Request</th>\n<th style=\"text-align:center\">Type</th>\n<th style=\"text-align:center\">Version</th>\n<th style=\"text-align:center\">Status</th>\n<th style=\"text-align:center\">Profile</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:center\">authentication</td>\n<td style=\"text-align:center\">/authentication/login</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">VIEWER</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">authentication</td>\n<td style=\"text-align:center\">/authentication/refresh_token</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">VIEWER</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">authentication</td>\n<td style=\"text-align:center\">/authentication/update_token_validity</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">authentication</td>\n<td style=\"text-align:center\">/authentication/token_validity</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/activity/:start_time/:end_time</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/devices_status</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">VIEWER</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/devices_status/:start_time/:end_time</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/environmental_data/:start_time/:end_time</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/global_status</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">VIEWER</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/logs</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/logs/:start_time/:end_time</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">monitoring</td>\n<td style=\"text-align:center\">/monitoring/monitoring_file/:start_time/:end_time</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/netcdf_file/:sweep_index/:group</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/current_sweep_index</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/sweep_by_id/:sweep_index/:group/:variable?</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/last_ray/:group/:variable?</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/sweep_list/:start_time/:end_time</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/scan_history/:start_time/:end_time/:type?</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/timestamp_limits</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">data</td>\n<td style=\"text-align:center\">/data/netcdf_archive/:sweep_indexes/:group</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/lidar</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">MODIFIED</td>\n<td style=\"text-align:center\">VIEWER</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/resolution_list</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/scan_list</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/settings_list</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/scan_parameters/:ID?</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/settings/:ID?</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/save_composite</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/save_from_scan/:id</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/scan_file/:id</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/scan_file/:start_id/:final_id</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/resolution_file/:id</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/resolution_file/:start_id/:final_id</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/settings_file/:id</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/settings_file/:start_id/:final_id</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/new_self_signed_certificate/:domains/:duration?</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/system_information_history</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/current_program</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/current_self_signed_certificate</td>\n<td style=\"text-align:center\">GET</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">VIEWER</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">configuration</td>\n<td style=\"text-align:center\">/configuration/save_settings</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">EXPERT</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">control</td>\n<td style=\"text-align:center\">/control/command/:action/:start_time?</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">control</td>\n<td style=\"text-align:center\">/control/program/:start_time?</td>\n<td style=\"text-align:center\">POST</td>\n<td style=\"text-align:center\">V1</td>\n<td style=\"text-align:center\">-</td>\n<td style=\"text-align:center\">STANDARD</td>\n</tr>\n</tbody>\n</table>\n<h2>Data groups</h2>\n<p>To ease data retrieval and homogenize with Windforge FTP data extraction in NetCDF file format, wind and aerosols data have been grouped in few categories.</p>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:center\">Group</th>\n<th style=\"text-align:center\">Available variables</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:center\">radial_wind_data</td>\n<td style=\"text-align:center\">radial_wind_speed</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_wind_data</td>\n<td style=\"text-align:center\">doppler_spectrum_width</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_wind_data</td>\n<td style=\"text-align:center\">doppler_spectrum_mean_error</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_wind_data</td>\n<td style=\"text-align:center\">cnr</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_wind_data</td>\n<td style=\"text-align:center\">radial_wind_speed_ci</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_wind_data</td>\n<td style=\"text-align:center\">radial_wind_speed_status</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">wind_reconstruction_data</td>\n<td style=\"text-align:center\">horizontal_wind_speed</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">wind_reconstruction_data</td>\n<td style=\"text-align:center\">vertical_wind_speed</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">wind_reconstruction_data</td>\n<td style=\"text-align:center\">wind_direction</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">wind_reconstruction_data</td>\n<td style=\"text-align:center\">wind_speed_ci</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">wind_reconstruction_data</td>\n<td style=\"text-align:center\">wind_speed_status</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">relative_beta</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">radial_wind_speed_status</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_x_max</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_y_average</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_amplitude</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_half_height_width</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_status</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">absolute_beta</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">radial_wind_speed_status</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_x_max</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_y_average</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_amplitude</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_half_height_width</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">radial_absolute_beta_data</td>\n<td style=\"text-align:center\">instrumental_function_status</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">atmospherical_structure_data</td>\n<td style=\"text-align:center\">atmospherical_structures_type (No data or no detection = 0 , residual layer = 20, mixed layer = 30 , unclassified cloud = 200, ice cloud = 300, water cloud = 400, unclassified aerosol = 2000, spherical aerosol = 3000, aspherical aerosol = 4000)</td>\n</tr>\n</tbody>\n</table>\n<p>When a request mentions in its input parameters, group or variable  like for example GET /data/sweep_by_id/:sweep_index/:group/:variable?  these groups and variable must be used given the examples.</p>\n<h2>Error management</h2>\n<p>Below is the list of errors that can occur:</p>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:center\">Error code</th>\n<th style=\"text-align:center\">Error</th>\n<th style=\"text-align:center\">Detailed explanation</th>\n<th style=\"text-align:center\">Meaning</th>\n<th style=\"text-align:center\">Troubleshooting</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Unknown given data group 'group'</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check group name</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Unknown given field: {FIELD}</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check field name. Cf</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">This group is not available for last ray request</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Unknown given field 'field' for group 'group'</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Start time not valid</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if time follows ISO8601 format ( YYYY-MM-DDTHH:mm:ssZ)</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">End time not valid</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if time follows ISO8601 format ( YYYY-MM-DDTHH:mm:ssZ)</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Start time must be older than end time</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Id has not the right format. Should be an integer</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'action' not valid</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check documentation of the request</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'loop' must be an array of objects</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if  &quot;[&quot;  and &quot;]&quot; exists.May be null if scheduler is not</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'scheduler' must be an array of objects or null</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if  &quot;[&quot;  and &quot;]&quot; exists.</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Unknown field 'wrongField' in loop at object #N</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check field syntax for the line number N</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Unknown field 'wrongField' in scheduler at object #N</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check field syntax for the line number N</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Missing field 'field' in loop at object #N</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check request's documentation</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Missing field 'field' in scheduler at object #N</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check request's documentation</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'loop' must contain at least one scan</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Loop must not be null.</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Value of field 'scan_id' in loop at object #N is not in the correct format</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if scan_id or iterations are integers, positive</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Value of field 'scan_id' in scheduler at object #N is not in the correct format</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if it's an integer, positive if the format is wrong for scan_id ,iteration or period value.Check if timestamp follows ISO8601 format  or is  &gt; than present time in case start_time  is wrong</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Scan id 'X' in loop at object #N does not exist</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if scan exists in library, depolar scan are not allowed and only the latest scan are allowed</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Scan id 'X' in scheduler at object #N does not exist</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if scan exists in library, depolar scan are not allowed and only the latest scan are allowed</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Relative Beta option is disabled, cannot start a calibration scan</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Object #1 and object #2 in scheduler have the same start time and period</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'sweep_index' has not the right format. Should be an integer greater or equal to 1</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'id' has not the right format. Should be an integer greater or equal to 1</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Relative Beta option is disabled, cannot edit a Calibration scan</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Relative Beta option is disabled, cannot save a Calibration scan</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Relative Beta option is disabled, cannot be added to a composite.</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Input data must be an object not empty</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'parameter' cannot be changed</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Scan must not be a composite</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Scan id 'X' does not exist</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Field 'field' not allowed for this sweep mode</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Field 'field' does not follow scan rules</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check all constraints that can be applied to that field</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Resolution with id 'X' does not exist</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'parent_scan_name' property is missing or its value is not a string</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'elementary_scan' must be an array which contains at least one elementary scan</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Check if   &quot;[&quot;  and &quot;]&quot; exists. cf example.</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">An elementary scan must contain two properties: 'scan_id' and 'iterations' which are integers greater or equal to 1</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Scan with id 'X' is a composite</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">This scan can't be modified with this request. Use /configuration/save_composite instead</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">token_validity' should be an integer between 1 and 24</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">&quot;'XXX.XXX.XX' has not the right format. Should be an IP address or a fully qualified domain name.&quot;</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">check IP address and domains or if comma separates addresses</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'duration' has not the right format.Should be an integer between 1 and 365.</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Final Id X should be equal or greater than  start id  Y</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">'sweep_index' has not the right format. Should be an integer greater or equal to 0</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">400</td>\n<td style=\"text-align:center\">parameter_not_valid</td>\n<td style=\"text-align:center\">Unknown given filter 'pp'.</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">check the filter in the URL, accepted are PPI, RHI, FIXED, DBS</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">401</td>\n<td style=\"text-align:center\">wrong_user_name_or_pwd</td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:center\">Client's connection refused because of wrong credentials.</td>\n<td style=\"text-align:center\">Check user name and password and if account is active</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">401</td>\n<td style=\"text-align:center\">account_inactive_for_too_long</td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:center\">the account has been locked because inactive during too much time</td>\n<td style=\"text-align:center\">Expert need to reactiv account.</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">401</td>\n<td style=\"text-align:center\">token_not_valid</td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:center\">Access token not valid.</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">403</td>\n<td style=\"text-align:center\">no_access_right</td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:center\">Profile used is not allowed for this request</td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">412</td>\n<td style=\"text-align:center\">connection_rejected</td>\n<td style=\"text-align:center\">A user is already operating  the Lidar</td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:center\">Check if someone has already taken system control</td>\n</tr>\n<tr>\n<td style=\"text-align:center\">412</td>\n<td style=\"text-align:center\">no_action_done</td>\n<td style=\"text-align:center\">State requested is the current one</td>\n<td style=\"text-align:center\"></td>\n<td style=\"text-align:center\"></td>\n</tr>\n<tr>\n<td style=\"text-align:center\">412</td>\n<td style=\"text-align:center\">no_action_done</td>\n<td style=\"text-align:center\">Lidar is already running</td>\n<td style=\"text-align:center\">One or multiple parameters are not valid.</td>\n<td style=\"text-align:center\">Stop the acquisition before</td>\n</tr>\n</tbody>\n</table>\n<p>Some example of these errors related to the requests themselves are given later in the document.</p>\n"
  }
});
