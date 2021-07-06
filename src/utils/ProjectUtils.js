import _ from 'lodash';

class EventEmitter {

  constructor() {
    this.events = {};
  }

  _getEventListByName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      this.events[eventName] = new Set();
    }
    return this.events[eventName]
  }

  on(eventName, fn) {
    this._getEventListByName(eventName).add(fn);
  }

  once(eventName, fn) {

    const self = this;

    const onceFn = function (...args) {
      self.removeListener(eventName, onceFn);
      fn.apply(self, args);
    };
    this.on(eventName, onceFn);

  }

  emit(eventName, ...args) {

    this._getEventListByName(eventName).forEach(function (fn) {

      fn.apply(this, args);

    }.bind(this));

  }

  removeListener(eventName, fn) {
    this._getEventListByName(eventName).delete(fn);
  }
}

class ProjectUtils {

  static generateRoutesFromConfigs(configs) {
    let allRoutes = [];
    configs.forEach((config) => {
      allRoutes = [
        ...allRoutes,
        ...this.setRoutes(config)
      ]
    });
    console.log("all",allRoutes);
    return allRoutes;
  }

  static setRoutes(config) {
    console.log("all",config);
    let routes = [...config.routes];

    return [...routes];
  }

  static updateNavItem(nav, id, item) {
    return nav.map(_item => {

      if (_item.id === id) {
        return _.merge({}, _item, item);
      }

      if (_item.children) {
        return _.merge({}, _item, {
          children: this.updateNavItem(_item.children, id, item)
        });
      } else {
        return _.merge({}, _item);
      }
    })
  }

  static removeNavItem(nav, id) {
    return nav.map(_item => {
      if (_item.id === id) {
        return null;
      }

      if (_item.children) {
        return _.merge({}, _.omit(_item, ['children']), {
          children: this.removeNavItem(_item.children, id)
        });
      } else {
        return _.merge({}, _item);
      }
    }).filter(s => s)
  }

  static prependNavItem(nav, item, parentId) {
    if (!parentId) {
      return [
        item,
        ...nav
      ]
    }

    return nav.map(_item => {

      if (_item.id === parentId && _item.children) {
        return {
          _item,
          children: [
            item,
            ..._item.children
          ]
        };
      }

      if (_item.children) {
        return _.merge({}, _item, {
          children: this.prependNavItem(_item.children, item, parentId)
        });
      } else {
        return _.merge({}, _item);
      }
    })
  }

  static appendNavItem(nav, item, parentId) {
    if (!parentId) {
      return [
        ...nav,
        item
      ]
    }

    return nav.map(_item => {

      if (_item.id === parentId && _item.children) {
        return {
          _item,
          children: [
            ..._item.children,
            item
          ]
        };
      }

      if (_item.children) {
        return _.merge({}, _item, {
          children: this.appendNavItem(_item.children, item, parentId)
        });
      } else {
        return _.merge({}, _item);
      }
    })
  }

  static hasPrivilege(privilege, allPrivileges) {
    return _.indexOf(allPrivileges, privilege.trim()) !== -1;
  }

  static hasAnyPrivilege(privileges, allPrivileges) {
    let hasPrivilege = false;

    for (let i = 0; i < privileges.length; i++) {
      if (this.hasPrivilege(privileges[i], allPrivileges)) {
        hasPrivilege = true;
        break;
      }
    }

    return hasPrivilege;
  }

  static EventEmitter = EventEmitter;


}

export default ProjectUtils;

export const isValueIsNumber = (value) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(value)
};

export const toDate = (date_string) => {
  let date_components = date_string.substr(0, 10).split("/");
  let day = date_components[0];
  let month = date_components[1];
  let year = date_components[2];
  return new Date(year, month - 1, day);
};

