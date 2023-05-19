export default class User {
  constructor(user) {
    this.id = user.id;
    this.firstName = user.userInfos.firstName;
    this.lastName = user.userInfos.lastName;
    this.fullname = this.getFullName(
      user.userInfos.firstName,
      user.userInfos.lastName
    );
    this.todayScore = [
      {
        name: "todayScore",
        score: parseFloat(user.todayScore * 100),
        fill: "red",
      },
    ];
    this.age = parseInt(user.userInfos.age);
    this.activity = this.getActivity(user.activity[0].sessions);
    this.averageSession = this.getAverageSession(
      user.averageSession[0].sessions
    );
    this.keyData = this.getKeyData(user.keyData);
    this.performance = this.getPerformance(user.performance[0]);
  }

  getFullName(firstname, lastname) {
    if (typeof firstname !== "string") {
      firstname = firstname.toString();
    }

    if (typeof lastname !== "string") {
      lastname = lastname.toString();
    }

    return `${firstname} ${lastname}`;
  }

  getActivity(activity) {
    let d = [];

    activity.forEach((i) => {
      let data = {
        day: i.day.toString(),
        kilogram: parseInt(i.kilogram),
        calories: parseInt(i.calories),
      };
      d.push(data);
    });

    return d;
  }

  getAverageSession(session) {
    let d = [];

    session.forEach((i) => {
      let data = {
        day: parseInt(i.day),
        sessionLength: parseInt(i.sessionLength),
      };
      d.push(data);
    });

    return d;
  }

  getKeyData(keydata) {
    let d = [];
    Object.entries(keydata).map((key, value) => {
      d.push(key);
    });

    return d;
  }

  getPerformance(performance) {
    let d = [];

    performance.data.forEach((i) => {
      let data = {
        value: parseInt(i.value),
        kind: parseInt(i.kind),
        name: performance.kind[i.kind],
      };

      d.push(data);
    });

    return d;
  }
}
