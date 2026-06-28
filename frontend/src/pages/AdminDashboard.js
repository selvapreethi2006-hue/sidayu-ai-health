import React from 'react';
import { BarChart3, Users, MessageSquare, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Queries', value: '1,234', icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
    { label: 'Users Assessed', value: '856', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Doctor Bookings', value: '342', icon: CheckCircle, color: 'from-purple-500 to-purple-600' },
    { label: 'Success Rate', value: '94.2%', icon: BarChart3, color: 'from-amber-500 to-amber-600' },
  ];

  const recentQueries = [
    { id: 1, user: 'John Doe', concern: 'Back pain', status: 'Resolved', date: '2 hours ago' },
    { id: 2, user: 'Jane Smith', concern: 'Headaches', status: 'In Progress', date: '4 hours ago' },
    { id: 3, user: 'Mike Johnson', concern: 'Sleep issues', status: 'Resolved', date: '1 day ago' },
    { id: 4, user: 'Sarah Williams', concern: 'Anxiety', status: 'Resolved', date: '1 day ago' },
    { id: 5, user: 'Tom Brown', concern: 'Digestion', status: 'In Progress', date: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System analytics and query management</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-slate">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Queries Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-slate">Recent User Queries</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-light-gray">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate">User</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate">Health Concern</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-light-gray transition-colors">
                    <td className="px-6 py-4 text-sm text-slate font-medium">{query.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{query.concern}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        query.status === 'Resolved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {query.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{query.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
