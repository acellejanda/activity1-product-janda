/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Student } from "../models/Student.js";
const student ={

   //display all students
  index: async (req, res) => {
    const students = await Student.findAll();
    res.render("insert", { students });
  },


  insert: async (req, res) => {
    const { FirstName, LastName, MiddleName, Program, YearLevel, Section } = req.body;
    const student = await Student.create({
      FirstName,
      LastName,
      MiddleName,
      Program,
      YearLevel,
      Section,
    });
    //res.json(student);
    res.redirect("/students");
  },

   edit: async (req, res) => {
    const { id } = req.params;
    const found = await Student.findByPk(id);
    if (!found) return res.redirect("/students");
    res.render("edit", { student: found.toJSON() });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { FirstName, LastName, MiddleName, Program, YearLevel, Section } = req.body;
    const student = await Student.findByPk(id);

    await student.update({
      FirstName,
      LastName,
      MiddleName,
      Program,
      YearLevel,
      Section,
    });
   res.redirect("/students");
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    
    await student.destroy();
    res.redirect("/students");
  },

  
};


export { student };
