// JS Nuggets
// Function arguments (2 or fewer ideally)
// Don't
function createMenu(title, body, buttonText, cancellable) {
  //...
}

// Use
const menuConfig = {
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
};

function createMenu(menuConfig) {
  //...
}

// Function should do one thing
// Don't
function emailClents(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      emailClents(client);
    }
  });
}

// Use
function emailClients(clients) {
  clients.filter(isClientActive).forEach(email);
}

function isClientActive(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

// Function names should say what they do
// Don't
function addToDate(date, month) {
  //...
}

const date = new Date();
addToDate(date, 1);

// Use
function addMonthToDate(month, date) {
  //...
}

const date = new Date();
addMonthToDate(1, date);

// Function should only be one level of abstraction
// Don't
function parseBetterJSAlternative(code) {
  const REGEXES = [
    //...
  ];

  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      //...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}

// Use
function tokenize(code) {
  const REGEXES = [
    //...
  ];

  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push(/*...*/);
    });
  });

  return tokens;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach((token) => {
    ast.push(/*...*/);
  });

  return ast;
}

function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach((node) => {
    // parse...
  });
}

// Remove duplicate code
// Don't
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}

// Use
function showList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    let portfolio = employee.getGithubLink();

    if (employee.type === "manager") {
      portfolio = employee.getMBAProjects();
    }

    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}

// Don't use flags as function parameters
//Don't
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// Use
function createFile(name) {
  fs.create(`./temp/${name}`);
}

function createTempFile(name) {
  fs.create(name);
}

// Avoid side effects
// Don't
let name = "Beau Carnes";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

console.log(name);

// Use
let name = "Beau Carnes";

function splitIntoFirstAndLastName() {
  return name.split(" ");
}

const newName = splitIntoFirstAndLastName(name);

console.log(name);
console.log(newName);

// Don't write to global functions
// Don't
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter((elem) => !hash.has(elem));
};

// Use
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter((elem) => !hash.has(elem));
  }
}

// Favor functional programming over imperative programming
// Don't
const programmerOutput = [
  { name: "Uncle Bobby", linesOfCode: 500 },
  { name: "Suzie Q", linesOfCode: 1500 },
  { name: "Jimmy Gosling", linesOfCode: 150 },
  { name: "Gracie Hopper", linesOfCode: 1000 },
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

// Use
const INITIAL_VALUE = 0;

const totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);

// Encapsulate conditionals
// Don't
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  //...
}

// Use
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  //...
}

// Avoid negative conditionals
// Don't
function isDOMNodeNotPresent(node) {
  //...
}

if (!isDOMNodeNotPresent(ndoe)) {
  //...
}

// Use
function isDOMNodePresent(node) {
  //...
}

if (isDOMNodePresent(ndoe)) {
  //...
}

// Avoid conditionals
// Don't
class Airplane {
  //...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Air Force One':
        return this.getMaxAltitude();
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}

// Use
class Airplane {
  //...
}

class Boeing777 extends Airplane {
  //...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount(); 
  }
}

class AirForceOne extends Airplane {
  //...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  //...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}

// Remove dead code
// Remove below
function oldRequestModule(url) {
  //...
}

// Keep
function newRequestModule(url) {
  //...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.carnes.cc');
