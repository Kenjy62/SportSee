export default class User {
  /**
   * Crée une instance de la classe User.
   * @param {Object} user - Les données de l'utilisateur.
   */
  constructor(user) {
    console.log(user);

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

  /**
   * Permet de créer un nouvel objet contenant le nom complet de l'utilisateur.
   * @param {string} firstname - Le prénom de l'utilisateur.
   * @param {string} lastname - Le nom de famille de l'utilisateur.
   * @returns {string} Le nom complet de l'utilisateur (firstname + lastname).
   */
  getFullName(firstname, lastname) {
    if (typeof firstname !== "string") {
      firstname = firstname.toString();
    }

    if (typeof lastname !== "string") {
      lastname = lastname.toString();
    }

    return `${firstname} ${lastname}`;
  }

  /**
   * Permet de formater les données d'activité de l'utilisateur.
   * @param {Array} activity - Les données d'activité de l'utilisateur.
   * @returns {Array} Les données d'activité formatées.
   */
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

  /**
   * Permet de formater les données de session moyenne de l'utilisateur.
   * @param {Array} session - Les données de session moyenne de l'utilisateur.
   * @returns {Array} Les données de session moyenne formatées.
   */
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

  /**
   * Permet de formater les données clés de l'utilisateur.
   * @param {Object} keydata - Les données clés de l'utilisateur.
   * @returns {Array} Les données clés formatées.
   */
  getKeyData(keydata) {
    let d = [];
    Object.entries(keydata).map((key, value) => {
      d.push(key);
    });

    return d;
  }

  /**
   * Permet de formater les données de performance de l'utilisateur.
   * @param {Object} performance - Les données de performance de l'utilisateur.
   * @returns {Array} Les données de performance formatées.
   */
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
