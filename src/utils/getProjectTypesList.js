module.exports = function (collection) {
  let projectTypeSet = new Set();
  collection.getAll().forEach(function (item) {
    if ("project_types" in item.data) {
      let project_types = item.data.project_types;

      project_types = project_types.filter(function (item) {
        switch (item) {
          // this list should match the `filter` list in project_types.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
          case "tagList":
          case "project":
          case "projects":
          case "projectTypesList":
            return false;
        }

        return true;
      });

      for (const project_type of project_types) {
        projectTypeSet.add(project_type);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...projectTypeSet];
};
