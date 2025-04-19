module.exports = {
	apps: [
		{
			name: 'svg-into-png',
			script: './index.js',
			instances: 1,
			exec_mode: 'cluster',
			env: {
				PORT: 3003,
				NODE_ENV: 'production'
			},
		}
	]
};
