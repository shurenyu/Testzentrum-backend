module.exports = {
	HOST: "92.205.26.238",
	USER: "covidtest",
	PASSWORD: "Covidtest!@#123",
	DB: "CovidtestDB",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
